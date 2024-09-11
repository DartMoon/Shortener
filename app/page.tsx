import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';

export default function Home() {
  return (
    <div>
      <h1>Shortener: Shortening your way</h1>
      <p>
        Carry big links in your pocket with Shortener, the URL minimizer. This app transforms
        cumbersome URLs into compact versions ideal for sharing and saving space. Navigate the web
        smoothly with Shortener
      </p>
      <Button className="w-full">Next UI Button</Button>
      <Input />
    </div>
  );
}
