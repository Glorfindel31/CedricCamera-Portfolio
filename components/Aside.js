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
} from '@/components/ui/alert-dialog';

export default function Aside() {
  return (
    <aside className="fixed top-0 left-0 flex flex-col w-[20%] p-8 h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Cedric Florentin</h1>
      </div>
      <nav>
        <ul className="space-y-4 pl-4">
          <li>
            <button>Digital/Commercial</button>
          </li>
          <li>
            <a href="#digital-other">Digital/Other</a>
          </li>
          <li>
            <a href="#analogue-commercial">Analogue/Commercial</a>
          </li>
          <li>
            <a href="#analogue-other">Analogue/Other</a>
          </li>
          <li>
            <AlertDialog>
              <AlertDialogTrigger>Infos</AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Infos</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
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
