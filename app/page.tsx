import { METADATA } from '@/constants/metadata';

export default function Home() {
  return (
    <section>
      <h1>{METADATA.root.title}</h1>
      <p>{METADATA.root.description}</p>
    </section>
  );
}
