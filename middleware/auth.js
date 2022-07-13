//check the state of the user to protect routes

export default function ({ store, redirect }) {
  console.log(typeof store, typeof redirect);
  if (!store.state.user) {
    redirect("/login");
  } else {
    window.location = "/";
  }
}
