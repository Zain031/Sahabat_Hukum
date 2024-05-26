const { compareSync, hashSync } = require ("bcryptjs")

export const hashPassword = (password) => {
    return hashSync(password)
}

export const comparePasword = (password, password_db) => {
    return compareSync(password, password_db)
}
