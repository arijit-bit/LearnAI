import { redirect } from 'next/navigation';
import { demoStudentProfile } from '../../../lib/data/demoStudentProfile';

export default function ProfileRedirectPage() {
  redirect(`/profile/${demoStudentProfile.student.username}`);
}
