import LoginForm from "./components/LoginForm/LoginForm";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Class from "./components/Class/Class";
import { Payment } from "./components/Payment/Payment";
import { Footer } from "./components/Footer/Footer";
import { Course } from "./components/Course/Course";

export default function Home() {
  return (
    <>
        <Header />
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <LoginForm />
          <Profile />
          <Class />
          <Payment />
          <Course />
        </main>
        <Footer />
    </>
  );
}
