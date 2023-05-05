import Image from "next/image";
import Link from "next/link";
function login() {
  return (
    <>
      <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4">
        <div className="flex flex-col items-center justify-center">
          <Link href="./">
            <Image
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg1.svg"
              width={250}
              height={250}
              alt="Picture of the author"
            />
          </Link>

          <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
            <p
              className="focus:outline-none text-2xl text-center font-extrabold leading-6 text-gray-800"
            >
              Login to your account
            </p>
            
            <button
              aria-label="Continue with google"
              role="button"
              className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
            >
              <Image
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
                alt="google" width={30}
                height={30}
              />
              <p className="text-base font-medium ml-4 text-gray-700">
                Continue with Google
              </p>
            </button>
            <button
              aria-label="Continue with github"
              role="button"
              className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
            >
              <Image
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg3.svg"
                alt="github" width={30}
                height={30}
              />
              <p className="text-base font-medium ml-4 text-gray-700">
                Continue with Github
              </p>
            </button>
            <button
              aria-label="Continue with twitter"
              role="button"
              className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
            >
              <Image
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg4.svg"
                alt="twitter" width={30}
                height={30}
              />
              <p className="text-base font-medium ml-4 text-gray-700">
                Continue with Twitter
              </p>
            </button>
            <div className="w-full flex items-center justify-between py-5">
              <hr className="w-full bg-gray-400" />
              <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
                OR
              </p>
              <hr className="w-full bg-gray-400  " />
            </div>
            <div>
              <label
                id="email"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Email
              </label>
              <input
                aria-labelledby="email"
                type="email"
                className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
            <div className="mt-6  w-full">
              <label
                htmlFor="pass"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Password
              </label>
              <div className="relative flex items-center justify-center">
                <input
                  id="pass"
                  type="password"
                  className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
                <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                  <Image
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg"
                    alt="viewport" width={25}
                    height={25}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button
                role="button"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
                <Link href={"../home"}>
                  Create my account
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default login;
