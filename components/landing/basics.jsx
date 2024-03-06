import CLogo from "@components/logos/c-logo";
import CppLogo from "@components/logos/cpp-logo";
import DockerLogo from "@components/logos/docker-logo";
import GithubLogo from "@components/logos/github-logo";
import LinuxLogo from "@components/logos/linux-logo";
import UbuntuLogo from "@components/logos/ubuntu-logo";

export default function Basics() {

  return <section className="bg-white dark:bg-gray-900 pb-12">
    <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
      <div className="max-w-screen-md mx-auto mb-8 lg:mb-16">
        <h2 className="mb-4 text-center text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">Start from basics</h2>
        <p className="text-gray-500 sm:text-xl dark:text-gray-400">Learn how to use the most important development tools and languages before moving forward!</p>
      </div>
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        <div>
          <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <UbuntuLogo className="w-10 h-10" />
          </div>
          <h3 className="mb-2 text-xl font-bold dark:text-white">Ubuntu</h3>
          <p className="text-gray-500 dark:text-gray-400">Setup and use Ubuntu as your primary development environment.</p>
        </div>
        <div>
          <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <GithubLogo className="w-10 h-10" />
          </div>
          <h3 className="mb-2 text-xl font-bold dark:text-white">GitHub</h3>
          <p className="text-gray-500 dark:text-gray-400">Start versioning and publishing your code on GitHub or any other Git system.</p>
        </div>
        <div>
          <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <CLogo className="w-10 h-10" />
          </div>
          <h3 className="mb-2 text-xl font-bold dark:text-white">Write in C</h3>
          <p className="text-gray-500 dark:text-gray-400">Learn to write and compile your code in one of the most popular native languages.</p>
        </div>
        <div>
          <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <CppLogo className="w-10 h-10" />
          </div>
          <h3 className="mb-2 text-xl font-bold dark:text-white">Learn C++</h3>
          <p className="text-gray-500 dark:text-gray-400">Advance your skills in native development by learning C++ and STL.</p>
        </div>
        <div>
          <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <LinuxLogo className="w-10 h-10" />
          </div>
          <h3 className="mb-2 text-xl font-bold dark:text-white">Linux</h3>
          <p className="text-gray-500 dark:text-gray-400">Learn how to write a native code on Linux and other Unix systems.</p>
        </div>
        <div>
          <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <DockerLogo className="w-10 h-10" />
          </div>
          <h3 className="mb-2 text-xl font-bold dark:text-white">Use Docker</h3>
          <p className="text-gray-500 dark:text-gray-400">Get familiar with container technologies to run your apps smoothly.</p>
        </div>
      </div>
    </div>
  </section>
}