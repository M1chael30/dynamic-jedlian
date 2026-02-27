import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import TextInput from '../text-input'
import FormError from '../form-error'
import Loading from '../loading'
import { useForm } from '@inertiajs/react'
import { Button } from '../ui/button'
import { toast } from 'sonner'

export default function PersonalInfoCard({ profileInfo }) {

 const { data, setData, processing, isDirty, errors, post } = useForm({
  name: profileInfo?.name || '',
  email: profileInfo?.email || ''
 })


 const submit = (e) => {
  e.preventDefault();

  post(route('profile.update'), {
   preserveScroll: true,
   onSuccess: () => {
    toast.success('Profile updated successfully');
   },
  });
 };


 return (
  <Card>
   <CardHeader>
    <CardTitle>Personal Information</CardTitle>
   </CardHeader>
   <CardContent>
    <form onSubmit={submit} className='space-y-6'>
     <div className="space-y-3">
      <TextInput
       labelTitle={'User'}
       labelName={'User'}
       placeholder={'ex. John'}
       value={data.name}
       onChange={(e) => setData('name', e.target.value)}
      />
      <FormError message={errors.name} />
     </div>
     <div className="space-y-3">
      <TextInput
       labelTitle={'Email'}
       labelName={'Email'}
       placeholder={'ex. john@email.com'}
       value={data.email}
       onChange={(e) => setData('email', e.target.value)}
      />
      <FormError message={errors.email} />
     </div>
     <Button type="submit" disabled={processing || !isDirty}>
      {
       processing ? <Loading title={'Loading...'} /> : 'Update'
      }
     </Button>
    </form>
   </CardContent>
  </Card>
 )
}
