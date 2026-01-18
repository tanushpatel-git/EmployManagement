const adminData = {
        name:"Tanush Patel",
        username: "tanush_patel",
        password:"tanush1212",
        email:"tanush000patel@gmail.com",
        status:"admin",
    };

export const setLocalStorage = () => {
        localStorage.setItem("adminData", JSON.stringify(adminData));
}
