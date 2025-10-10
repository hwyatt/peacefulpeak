import { Hero } from "./components/hero/hero";
import { Card } from "./components/card/card";

const SereneContent = () => (
  <div className="flex flex-col gap-2">
    <span className="text-balance">
      Perfect for couples who’ve planned everything and want peace of mind on
      the big day.
    </span>
    <ul className="list-disc list-inside font-semibold">
      <li>One planning meeting before the wedding</li>
      <li>Timeline creation and vendor confirmation</li>
      <li>Rehearsal coordination (up to 1 hour)</li>
      <li>Day-of coordination (8 hours coverage)</li>
      <li>Management of vendors, setup, and schedule</li>
    </ul>
    <span>Starting at: $1,000</span>
  </div>
);

const TranquilContent = () => (
  <div className="flex flex-col gap-2">
    <span className="text-balance">
      For couples who have some plans in place but want extra guidance along the
      way.
    </span>
    <ul className="list-disc list-inside font-semibold">
      <li>Up to 3 planning meetings</li>
      <li>Vendor recommendations and communication support</li>
      <li>Assistance with design and theme details</li>
      <li>Timeline creation and rehearsal coordination</li>
      <li>Day-of coordination (10 hours coverage)</li>
    </ul>
    <span>Starting at: $2,000</span>
  </div>
);

const PeacefulContent = () => (
  <div className="flex flex-col gap-2">
    <span className="text-balance">
      The all-inclusive experience for couples who want a stress-free planning
      journey.
    </span>
    <ul className="list-disc list-inside font-semibold">
      <li>Unlimited planning meetings</li>
      <li>Full vendor sourcing and management</li>
      <li>Budget planning and tracking</li>
      <li>Event design and styling guidance</li>
      <li>Timeline creation, rehearsal coordination</li>
      <li>Full day-of coordination (up to 12 hours coverage)</li>
    </ul>
    <span>Starting at: $3,500</span>
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 gap-16 text-neutral-800">
      <div className="flex flex-col gap-4 items-center text-balance text-center pt-8">
        <span className="font-bold text-2xl">
          “Creating your perfect day with ease, beauty, and peace of mind.”
        </span>
        <span className="text-lg">
          At Peaceful Planning, we believe every couple deserves a stress-free
          celebration. From intimate gatherings to grand events, we’re here to
          handle the details so you can fully enjoy every moment.
        </span>
      </div>
      <Hero />
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        <Card
          title="The Serene Package"
          content={<SereneContent />}
          badge={
            <div className="badge badge-accent badge-sm">
              Day-of Coordination
            </div>
          }
          img="/ardent4930.jpg"
        />
        <Card
          title="The Tranquil Package"
          content={<TranquilContent />}
          badge={
            <div className="badge badge-accent badge-sm">Partial Planning</div>
          }
          img="/ardent4862.jpg"
        />
        <Card
          title="The Peaceful Package"
          content={<PeacefulContent />}
          badge={
            <div className="badge badge-accent badge-sm">
              Full-Service Planning
            </div>
          }
          img="/ardent4860.jpg"
        />
      </div>
      <div className="flex flex-col gap-4 items-center text-balance text-center border-neutral border-y-2 py-4">
        <span className="font-bold text-2xl text-neutral-700">
          Your wedding should be joyful, not stressful. Let’s create a
          celebration that’s uniquely yours—with peace of mind every step of the
          way.
        </span>
        <a
          href="mailto:peacefulpeakplanning@gmail.com"
          className="btn btn-accent btn-lg rounded-lg"
        >
          Schedule a Free Consultation
        </a>
      </div>
    </div>
  );
}
