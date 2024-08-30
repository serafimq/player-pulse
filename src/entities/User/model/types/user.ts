import { User } from "@supabase/supabase-js";

export interface UserSchema {
    authData?: User;

    _inited: boolean;
}
