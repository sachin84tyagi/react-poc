const checkIfMatchingPasswords = (
    passwordKey,
    passwordConfirmationKey
) => {
    return (group) => {
        let passwordInput = group.controls[passwordKey],
            passwordConfirmationInput = group.controls[passwordConfirmationKey];
        if (passwordInput.value !== passwordConfirmationInput.value) {
            passwordConfirmationInput.setErrors({ notEquivalent: true });
        } else {
            passwordConfirmationInput.setErrors(null);
        }
        return null;
    };
}


export default {
    checkIfMatchingPasswords : checkIfMatchingPasswords
}