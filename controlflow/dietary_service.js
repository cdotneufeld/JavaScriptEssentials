let userRole = "Done"
let accessLevel

if (userRole === "Employee") {
    accessLevel = "You are authorized to access Dietary Services.";
} else if (userRole === "Enrolled Member") {
    accessLevel = "You are authorized to access Dietary Services and one-on-one interaction with a dietician.";
} else if (userRole === "Subscriber") {
    accessLevel = "You are authorized for partial access to Dietary Services only.";
} else if (userRole === "Non-Subscriber") {
    accessLevel = "Please enroll or subscribe first to access this facility."
} else {
    accessLevel = "Unknown role. No access granted."
}

console.log("Access Level: ", accessLevel)