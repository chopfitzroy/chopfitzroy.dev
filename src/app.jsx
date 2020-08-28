import Link from "./components/link";
import Social from "./components/social";
import Profile from "./components/profile";

export const App = () => {
  return (
    <>
      <div class="min-w-screen min-h-screen p-8 flex flex-col items-center justify-start  bg-gray-200">
        <Profile />
        <Social twitch="https://www.twitch.tv/chopfitzroy" twitter="https://twitter.com/chopfitzroy" />
        <div class="max-w-screen-md p-8 rounded-md bg-white">
          <h1 class="mb-4 text-2xl">Hi I'm Otis 👋</h1>
          <p class="mb-2 leading-relaxed">
            Formerly a front-end developer, now a{" "}
            <Link
              href="https://nz.linkedin.com/in/otiswright"
              text="Technical Lead"
            />{" "}
            at <Link href="https://www.fingermark.tech/" text="Fingermark" />.
          </p>
          <p class="mb-2 leading-relaxed">
            I am an open source enthusiast, despite the fact that I need to
            contribute more 🤖.
          </p>
          <p class="mb-2 leading-relaxed">
            I like <Link href="https://vuejs.org/" text="Vue" /> 💚,{" "}
            <Link href="https://www.openapis.org/" text="OpenAPI" /> 🔗, and I
            am currently obsessed with{" "}
            <Link href="https://xstate.js.org/" text="xState" /> 💙, I also
            spend a lot of time with{" "}
            <Link href="https://reactjs.org/" text="React" /> ⚛ and{" "}
            <Link href="https://graphql.org/" text="GraphQL" /> 🎓 at work.
          </p>
          <p class="mb-2 leading-relaxed">
            I am interested in fishing 🎣, reading 📚, hiking 🗻, and gaming 🎮.
          </p>
          <p class="mb-2 leading-relaxed">
            I am in the process of starting to blog again on{" "}
            <Link href="https://dev.to/chopfitzroy" text="DEV" /> 🤓 and I was
            formerly active on{" "}
            <Link href="https://medium.com/@crashybang" text="Medium" /> 👽.
          </p>
          <p class="mb-2 leading-relaxed">
            If you have any questions or want to get in touch please email using
            the address listed in my{" "}
            <Link href="https://github.com/chopfitzroy" text="GitHub bio" /> 👌.
          </p>
        </div>
      </div>
    </>
  );
};
