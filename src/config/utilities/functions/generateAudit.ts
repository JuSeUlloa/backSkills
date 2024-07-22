export function auditJsonAdd(user: string): object {
    return {
        "user_create_plataforma": user,
        "user_update_plataforma": user,
        "create_at_plataforma": new Date(Date.now()),
        "update_at_plataforma": new Date(Date.now())
    };
}
