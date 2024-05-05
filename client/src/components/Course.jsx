function Course({
    imageLink = "",
    title = "",
    description = "",
    actualPrice,
    discountPrice = actualPrice,
    
}) {
    return (
      // main div for course card
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-10">
        <img
          src="https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_08_MicrosoftTeams-image-13-2-1.jpg"
          alt="Course Image"
          className="rounded-lg"
        />

        <div className="p-5">
          {/* description */}
          <div className="font-lg font-bold card-title">
            Live 0-100 Complete
          </div>
          <div>{description}</div>
          <h6 className="mb-2 card-subtitle mt-5">
            <div className="flex">
              ₹5599
              <div className="flex  justify-between flex-grow-1 ms-1 w-full">
                <div className="font-sm text-gray font-regular text-decoration-line-through">
                  7999
                </div>
                <div className="text-success ms-2">30.00% off</div>
              </div>
            </div>
          </h6>

          <button
            type="Viewdetail"
            className="bg-blue-700 hover:bg-blue-800
               text-white font-bold py-2 px-4 rounded-3xl mt-2 w-full"
          >
            Viewdetails
          </button>
        </div>
      </div>
    );
}

export default Course;