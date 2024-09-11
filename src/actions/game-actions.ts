"use server";
import { supabaseServerClient } from "@/lib/supabase/server";
import { CustomUser } from "../../store/user-store";

export type Game = {
    id?: string;
    type: "single" | "multi";
    user1: CustomUser;
    user2?: CustomUser;
    guessNumber: number;
    correctPlaces?: number;
    correctNumbers?: number;
    is_ended: boolean;
    ended_at?: Date;
    game_plays?: GamePlay[]
}


export type GamePlay = {
    game_id: string;
    user_id: string;
    guess: number;
    correct_numbers: number;
    correct_places: number;
}


export async function createNewGame(game: Game) {

    const { user1, user2, guessNumber } = game;
    const supabase = supabaseServerClient();

    const newGame = {
        user1: user1.id,
        user2: user2?.id || null,
        guess_number: guessNumber,
        is_ended: false
    }
    try {
        const { data, error } = await supabase.from('games').insert([newGame]).select()

        if (error) {
            console.log("Error", error);
            return;
        }

        console.log(data);
        return { success: true, code: 200, data }



    } catch (error) {
        return { success: false, code: 500, message: "Internal server error" }
    }

}
export async function updateGame(game: Partial<Game>) {


    const supabase = supabaseServerClient();


    try {
        const { data, error } = await supabase.from('games')
            .update(game)
            .eq('id', game.id)
            .select()

        if (error) {
            console.log("Error", error);
            return;
        }


        return { success: true, code: 200, data }



    } catch (error) {
        return { success: false, code: 500, message: "Internal server error" }
    }

}

export async function addGamePlay(gamePlay: GamePlay) {

    const supabase = supabaseServerClient();

    try {
        const { data, error } = await supabase.from('game_plays').insert([gamePlay])
        return { success: true, code: 200, data }
    } catch (error) {
        return { success: false, code: 500, message: "Internal server error" }
    }
}

export async function getGameData(gameId: string) {


    const supabase = supabaseServerClient();


    try {
        const { data, error } = await supabase.from('games').select().eq('id', gameId)
            .select(`id,guess_number,is_ended,game_plays(user_id,guess)`)
            .single()

        if (error) {
            console.log("Error", error);
            return;
        }


        return { success: true, code: 200, data }



    } catch (error) {
        return { success: false, code: 500, message: "Internal server error" }
    }

}