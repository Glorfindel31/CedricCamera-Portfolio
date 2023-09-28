import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../components/ui/alert-dialog';
import Link from 'next/link';
import {Button, buttonVariants} from '../components/ui/button';

export default function Aside({selectedGallery, setSelectedGallery}) {
  return (
    <aside className="fixed top-0 left-0 flex flex-col w-[20%] p-8 h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Cedric Florentin</h1>
      </div>
      <nav>
        <ul className="pl-2">
          <li>
            <Button variant="ghost" onClick={() => setSelectedGallery('all')}>
              All Images
            </Button>
          </li>
          <li>
            <Button variant="ghost" onClick={() => setSelectedGallery('digiCo')}>
              Digital/Commercial
            </Button>
          </li>
          <li>
            <Button variant="ghost" onClick={() => setSelectedGallery('digiOth')}>
              Digital/Other
            </Button>
          </li>
          <li>
            <Button variant="ghost" onClick={() => setSelectedGallery('anaCo')}>
              Analogue/Commercial
            </Button>
          </li>
          <li>
            <Button variant="ghost" onClick={() => setSelectedGallery('anaOth')}>
              Analogue/Other
            </Button>
          </li>
          <li>
            <Link
              className={buttonVariants({variant: 'ghost'})}
              href="https://www.instagram.com/cedriccamera/"
              target="_blank"
            >
              Instagram
            </Link>
          </li>
          <li>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="ghost">Infos</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your
                    account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction>Close</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </li>
        </ul>
      </nav>
      <footer className="mt-auto bg-white p-4">
        <small className=" text-xs">Copyright 2023 Cedric Florentin</small>
      </footer>
    </aside>
  );
}
