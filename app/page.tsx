import SimplifyForm from '@/app/feature/form';

const RootPage = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="mb-4 uppercase">Shortener</h1>
      <p className="mb-8 max-w-2xl text-center">
        Carry big links in your pocket with Shortener, the URL minimizer. This app transforms
        cumbersome URLs into compact versions ideal for sharing and saving space. Navigate the web
        smoothly with Shortener
      </p>
      <SimplifyForm />
    </section>
  );
};

export default RootPage;
