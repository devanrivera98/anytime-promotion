import CaspioIntegration from "./CaspioIntegration";

export default function Validator() {
  return (
    <>
    <div className="bg-offWhite min-h-screen">
      <div className="flex justify-center pt-5">
        <h1 className="text-2xl md:text-4xl p-1 my-5">Authentication</h1>
      </div>
      <div className="leading-6 sm:w-1/2 mx-auto">
        <div className="mx-5">
          <h1 className="text-gray-900 font-extrabold text-xl">Authentication Check:</h1>
        </div>
        <div className="px-5 py-3" >
          <p>Verify the authenticity of your Anytime Promotion signed item by using our Autograph Verification. The serial number included in your COA will provide you with: </p>

          <div className="leading-9">
            <div>
              &bull;  Issue Signed
            </div>
            <div>
              &bull;  Who Signed
            </div>
            <div>
              &bull;  Date of Signing
            </div>
            <div>
              Enter your item's serial number below:
            </div>
          </div>
        </div>
        <div className="pl-1">
          <CaspioIntegration/>
        </div>
      </div>
    </div>
    </>

  )
}
