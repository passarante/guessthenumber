'use server'

import { supabaseServerClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { CustomUser } from '../../store/user-store';
import console from 'console';



export async function login({ email, password }: { email: string; password: string }) {
    const supabase = supabaseServerClient()


    const data = {
        email,
        password,
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        console.log(error);

        return { data: { success: false, error: "Error when logging in", code: 500 } }
    }

    revalidatePath('/', 'layout')

    let supabaseUser: CustomUser | null

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { data: { success: false, code: 404, user: null } }
    supabaseUser = user

    if (supabaseUser) {
        const { data, error: userError } = await supabase.from('users').select('*').eq('id', user.id).single()

        if (data) {
            console.log(data);
            supabaseUser.name = data.name
            supabaseUser.username = data.username
        }
    }

    return { data: { success: true, code: 200, user: supabaseUser } }

}

export async function signup({ email, password, name, username }: { email: string; password: string, name: string, username: string }) {
    const supabase = supabaseServerClient()


    const userData = {
        email,
        password,

    }

    const { error, data: { user } } = await supabase.auth.signUp(userData)

    console.log("User", user);

    if (user) {

        const { data, error: upsertErorr } = await supabase
            .from('users')
            .upsert({ id: user.id, name, username })
            .select()


        console.log("Data", data);

        if (upsertErorr) {
            console.log(upsertErorr);
        }
    }


    revalidatePath('/', 'layout')
    redirect('/')
}