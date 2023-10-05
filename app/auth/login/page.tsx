import Link from "next/link";
import { Logo } from "@/assets/icons";
import { Button, Input } from "@/components";
import { JordanIcon } from "@/assets/icons/sponsors";

export default function Login() {
  return (
    <main className="main login__page">
      <div className="container">
        <header className="login__page--header">
          <ul className="login__page--icons">
            <Logo className="login__page--logo" />
            <JordanIcon className="login__page--jordan" />
          </ul>
          <h1 className="login__page--title">
            Enter your email to join us or sign in.
          </h1>
        </header>
        <div className="login__page--content">
          <form className="login__form">
            {/* country select */}
            <div className="country__select">
              <span>Uzbekistan</span>
              <span className="selector">Change</span>
            </div>
            <Input placeholder="Email" variant="secondary" />
            <p className="login__form--description">
              By continuing, I agree to Nike{"'"}s{" "}
              <Link href="/privacy-policy" className="login__form--link">
                Privacy Policy
              </Link>{" "}
              and <br />
              <Link href="/terms-of-use" className="login__form--link">
                Terms of Use.
              </Link>
            </p>
            <Button className="login__form--button">Continue</Button>
          </form>
        </div>
      </div>
    </main>
  );
}
