import React from 'react'
import CreateDescriptionForm from '../../../components/components-admin-achievement-management/create-description-form'
import { Head } from '@inertiajs/react'
import AdminLayout from '../../../layouts/admin-layout'


export default function CreateAchievementDescription({achievement}) {
    console.log({achievement})

  return (
        <>
            <Head title="Achievement Management" />
            <section className="mx-auto w-full max-w-3xl space-y-5 px-4 py-5">
                {/* create desc */}
                <CreateDescriptionForm achievement={achievement} />
            </section>
        </>
  )
}

CreateAchievementDescription.layout = (page) => <AdminLayout children={page}/>

