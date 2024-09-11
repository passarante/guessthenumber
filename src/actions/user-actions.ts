"use server"


import { supabaseServerClient } from "@/lib/supabase/server";
import { CustomUser } from "../../store/user-store";

export const getUserDetails = async () => {
    const supabase = supabaseServerClient();
    try {
        let supabaseUser: CustomUser | null

        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return { success: false, code: 404, user: null }
        supabaseUser = user

        if (supabaseUser) {
            const { data, error: userError } = await supabase.from('users').select('*').eq('id', user.id).single()

            if (data) {

                supabaseUser.name = data.name
                supabaseUser.username = data.username
            }
        }

        return { success: true, code: 200, user: supabaseUser }
    } catch (error) {
        return { success: false, code: 500, user: null }
    }
}