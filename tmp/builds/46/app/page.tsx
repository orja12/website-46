import { Gallery } from '../components/Gallery';
import { ContactForm } from '../components/ContactForm';

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-8">Welcome to Show Your Work!</h1>
      <Gallery />
      <div className="mt-10">
        <ContactForm />
      </div>
    </main>
  );
}
