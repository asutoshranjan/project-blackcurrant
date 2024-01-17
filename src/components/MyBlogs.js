import React from "react";
import Container from "./Container";
import Reveal from "./animations/Reveal";

export default function Blogs() {
  return (
    <div className="text-gray-300" id="blogs">
      <Container>
        <div className="mb-20 space-y-4 px-6 md:px-0">
          <Reveal>
            <h2 className="text-center text-2xl font-bold text-white md:text-4xl">
              Latest Blog Posts.
            </h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="aspect-auto">
            <div className="p-8 border  rounded-3xl bg-gray-800 border-gray-700 shadow-2xl shadow-gray-600/10">
              <div>
                <h6 className="text-lg font-medium text-white">
                  Building an online store platform with Appwrite & Flutter:
                  LocalEase
                </h6>
                <p className="text-sm text-gray-300">
                  Inventory control, Notifications, Ecommerce, Mobile App,
                  Seller Dashboard
                </p>
              </div>
              <p className="mt-6 text-gray-300">
                In this module we will try to create a dual-interface online
                store platform connecting users with local shops. Sellers manage
                stores, products, and inventory through an intuitive form. Users
                receive real-time store details, subscribe for personalized
                notifications, and access nearby stores with location-specific
                information. &nbsp;
                <a
                  className="inline-block"
                  target="_blank"
                  href="https://asutosh.hashnode.dev/building-an-online-store-platform-using-appwrite-and-flutter-localease"
                >
                  <span className="text-sky-400 hover:text-indigo-400">
                    Read more
                  </span>
                </a>
              </p>
            </div>
          </div>

          <div className="aspect-auto">
            <div className="p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-2xl shadow-gray-600/10">
              <div>
                <h6 className="text-lg font-medium text-white">
                  Getting Started with Using Realtime Data in Your Flutter App
                </h6>
                <p className="text-sm text-gray-300">
                  Realtime, EventListener, Stream, Database
                </p>
              </div>
              <p className="mt-6 text-gray-300">
                In the world of modern application development, real-time
                interactions have become essential to create engaging and
                dynamic user experiences. Appwrite, a powerful
                backend-as-a-service platform, offers a Realtime API that
                enables developers to implement real-time functionality into
                their applications. In this tutorial, we'll explore how to
                integrate the Appwrite Realtime API into a Flutter app to create
                a real-time Rick & Morty character app. &nbsp;
                <a
                  className="inline-block"
                  target="_blank"
                  href="https://asutosh.hashnode.dev/getting-started-with-appwrite-realtime-api-in-your-flutter-app"
                >
                  <span className="text-sky-400 hover:text-indigo-400">
                    Read more
                  </span>
                </a>
              </p>
            </div>
          </div>

          <div className="aspect-auto">
            <div className="p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-2xl shadow-gray-600/10">
              <div>
                <h6 className="text-lg font-medium text-white">
                  OnePlanet: Connecting Communities for Sustainable Tomorrow
                </h6>
                <p className="text-sm text-gray-300">
                  Social Network, Chat, Sustainability, Maps APIs
                </p>
              </div>
              <p className="mt-6 text-gray-300">
                OnePlanet aims to foster a more sustainable future by
                encouraging SDG action and continually evaluating its strategy
                to serve its users better. The app enables users to organize and
                participate in various drives, such as cleanliness drives and
                donation drives, to contribute towards achieving the SDGs.
                &nbsp;
                <a
                  className="inline-block"
                  target="_blank"
                  href="https://asutosh.hashnode.dev/oneplanet-connecting-communities-for-sustainable-tomorrow"
                >
                  <span className="text-sky-400 hover:text-indigo-400">
                    Read more
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
