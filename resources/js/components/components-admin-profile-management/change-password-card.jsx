import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import TextInput from '../text-input'
import FormError from '../form-error'
import Loading from '../loading'
import { useForm } from '@inertiajs/react'
import { Button } from '../ui/button'
import { toast } from 'sonner'

export default function ChangePasswordCard() {

 const { data, setData, processing, isDirty, errors, post, reset } = useForm({
  current_password: '',
  password: '',
  password_confirmation: ''
 })


 const submit = (e) => {
  e.preventDefault();

  post(route('profile.update.password'), {
   preserveScroll: true,
   onFinish: () => reset(),
   onSuccess: () => {
    reset()
    toast.success('Profile updated successfully');
   },
  });
 };


 return (
  <Card>
   <CardHeader>
    <CardTitle>Change password</CardTitle>
   </CardHeader>
   <CardContent>
    <form onSubmit={submit} className='space-y-6'>
     <div className="space-y-3">
      <TextInput
       labelTitle={'Current Password'}
       labelName={'Current Password'}
       placeholder={'********'}
       type='password'
       value={data.current_password}
       onChange={(e) => setData('current_password', e.target.value)}
      />
      <FormError message={errors.current_password} />
     </div>
     <div className="space-y-3">
      <TextInput
       labelTitle={'Password'}
       labelName={'Password'}
       placeholder={'********'}
       type='password'
       value={data.password}
       onChange={(e) => setData('password', e.target.value)}
      />
      <FormError message={errors.password} />
     </div>
     <div className="space-y-3">
      <TextInput
       labelTitle={'Password Confirmation'}
       labelName={'Password Confirmation'}
       placeholder={'********'}
       type='password'
       value={data.password_confirmation}
       onChange={(e) => setData('password_confirmation', e.target.value)}
      />
      <FormError message={errors.password_confirmation} />
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
