'use client'

import NewUsersView from './components/NewUsersView';

export default function RemindersApp() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-12">
      <h1 className="text-4xl mb-4 font-medium">Reminders</h1>
      <NewUsersView />
    </main>
  );
}
