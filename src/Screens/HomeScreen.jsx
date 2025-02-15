import AutoBanner from "../components/AutoBanner";

const HomeScreen = () => {
  const newArrival1 = [
    { id: "1", img: "/new1.jpg", tag: "NEW", title: "Formal Women Shoe" },
    { id: "2", img: "/new2.jpg", tag: "NEW", title: "Formal Men Shoe" },
    { id: "3", img: "/new3.jpg", tag: "NEW", title: "Unisex Shoe" },
  ];
  const newArrival2 = [
    { id: "4", img: "/new4.jpg", tag: "NEW", title: " Women Flat Heals" },
    { id: "5", img: "/new5.jpg", tag: "NEW", title: "Men Shoe" },
  ];

  return (
    <div>
      <AutoBanner />
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="my-5 text-3xl font-bold font-serif text-center">
          Latest Products
        </h1>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-3 gap-6">
          {newArrival1.map((item) => (
            <div
              key={item.id}
              className="w-full border border-gray-300 shadow-lg rounded-lg overflow-hidden bg-white transition-all hover:shadow-xl"
            >
              {/* Image Section */}
              <img
                src={item.img}
                alt={`New Arrival ${item.id}`}
                className="w-full h-80 object-cover rounded-t-lg"
              />

              {/* Card Content */}
              <div className="p-4 flex flex-col items-center">
                <h1 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h1>
                <span className="text-sm font-medium text-red-500 bg-red-100 px-3 py-1 rounded-full mt-2">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 2 Column Grid */}
        <div className="grid grid-cols-2 gap-5 mt-10 mx-40">
          {newArrival2.map((item) => (
            <div
              key={item.id}
              className="w-full border border-gray-300 shadow-lg rounded-lg overflow-hidden bg-white transition-all hover:shadow-xl"
            >
              {/* Image Section */}
              <img
                src={item.img}
                alt={`New Arrival ${item.id}`}
                className="w-full h-80 object-cover rounded-t-lg"
              />

              {/* Card Content */}
              <div className="p-4 flex flex-col items-center">
                <h1 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h1>
                <span className="text-sm font-medium text-red-500 bg-red-100 px-3 py-1 rounded-full mt-2">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
