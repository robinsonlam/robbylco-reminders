
import AddReminderInput from './AddReminderInput';

export default function NewUsersView() {
    return (
      <main>
        <AddReminderInput />
        <span style={{display: 'none'}}>New user&apos;s view - not logged in</span>
      </main>
    );
  }
  