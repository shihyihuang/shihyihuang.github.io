import React from 'react'
import BackButton from '@/components/BackButton'
import ProjectAccordion from '@/components/projectAccordion'
import { Card, CardContent, Typography} from '@mui/material';

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center mx-4'>

        <div className='w-full mt-8 mx-3'>
            <BackButton />
        </div>

        <div className='flex flex-col lg:flex-row items-center justify-center mx-auto lg:w-4/5 mt-10'>
            <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
                <div className="carousel-item">
                    <img src="/projects/android/android1.png" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="/projects/android/android2.png" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="/projects/android/android3.png" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="/projects/android/android4.png" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="/projects/android/android5.png" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="/projects/android/android6.png" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="/projects/android/android7.png" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="/projects/android/android8.png" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="/projects/android/android9.png" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="/projects/android/android10.png" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="/projects/android/android11.png" className="rounded-box" />
                </div>
            </div>
            
            {/* intro */}
            <div className="mt-5 lg:mt-0 md:ml-8  flex justify-center">
                <Card  className='!bg-transparent !border-transparent !shadow-none md:w-11/12 lg:w-md'>
                    <CardContent>
                        <Typography className='!text-2xl !text-base-100 pb-5 '>
                        PET Planning
                        </Typography>
                        <Typography className='text-sm md:text-lg !text-info' >
                        <span className='text-lg md:text-xl !text-neutral'> | TARGET AUDIENCE | </span>
                        <br />
                        The primary target audience for the PET Planning app consists of dog owners aged 15 to 45 who seek a user-friendly and efficient way to manage their pets’ daily care routines. <br/>
                        The secondary audience includes dog care professionals such as veterinarians, groomers, and trainers who need a robust tool to manage multiple dogs' schedules and streamline communication with dog owners.
                        <br /><br />
                        <span className='text-lg md:text-xl !text-neutral'> | PROBLEM STATEMENT | </span>
                        <br />
                        Despite growth in the pet care market, existing apps often lack usability and dog-specific functionalities, featuring complex interfaces and insufficient customization for various dog breeds and professional requirements.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>

        <div className="flex justify-center mb-10 md:mb-20 mt-5 lg:mt-20 mx-4">
            <div className="w-11/12 md:w-10/12 lg:w-4/5 rounded-xl">
                <ProjectAccordion
                    bgColor="bg-warning"
                    titleColor="text-neutral"
                    textColor="text-info"
                    title="Authentication"
                    content={
                        <>
                            1. REGISTER <br/> User information is collected to be stored in
                            Firebase. Required details include email, password,
                            confirmation password, name, and address with validations
                            (e.g., password length, email format). Duplicated email
                            registration is restricted. Users can navigate back using the
                            arrow in the top-left corner. <br/><br/>
                            2. LOGIN <br/> Users are required to enter their email addresses
                            and passwords, which are securely stored in Firebase. To
                            ensure security, users have the option to show or hide their
                            passwords during entry. Additionally, the page offers a
                            password reset option through email validation, providing a
                            convenient recovery process for forgotten passwords. Once
                            users log in to the app, they remain logged in even if they exit
                            or terminate the app, which provides a seamless user
                            experience without requiring repeated login actions.
                        </>
                    }
                />
                <ProjectAccordion
                    bgColor="bg-neutral"
                    titleColor="text-warning"
                    textColor="text-info"
                    title="Schedule (MVP)"
                    content={
                        <>
                            An overview of upcoming events is provided, created
                            by users with a "Share to Facebook" button for content sharing.
                            Users can also create and delete events using the respective
                            buttons. Navigation between the home, report, and profile
                            pages is facilitated by a bottom menu, while selecting the
                            profile option reveals a left-side navigation drawer for managing user and pet profiles and logging out. A sync button on the top-
                            right corner updates data to the Firebase Real-Time Database, ensuring a seamless user experience. This design follows
                            common practice guidelines to prioritize usability and user choice.
                        </>
                    }
                />
                <ProjectAccordion
                    bgColor="bg-warning"
                    titleColor="text-neutral"
                    textColor="text-info"
                    title="Create Event"
                    content={
                        <>
                            Users can manually input the event name, select the
                            event type, and specify the date, start time, and end time of the
                            event for their selected pets to create events. The input values are validated to
                            ensure accuracy and adherence to specified criteria. Once
                            users have filled in all the event details, they can click the "
                            Create Event" button to save the event information.
                            Additionally, a "Cancel Event" button is provided, allowing users
                            to return to the schedule page if they decide to abort the event
                            creation process.
                        </>
                    }
                />
                <ProjectAccordion
                    bgColor="bg-neutral"
                    titleColor="text-warning"
                    textColor="text-info"
                    title="Report"
                    content={
                        <>
                            A visual representation of event summaries
                            based on user-selected start and end dates is provided. Users have the
                            ability to choose a specific time period and view a summary of
                            different types of events that occurred during that period. The
                            page provides two visualization options: a bar chart and a pie
                            chart. Users can select their preferred visualization type based
                            on their personal preferences. This feature enhances user
                            flexibility and allows for a more comprehensive understanding
                            of the event data.
                        </>
                    }
                />
                <ProjectAccordion
                    bgColor="bg-warning"
                    titleColor="text-neutral"
                    textColor="text-info"
                    title="Navigation Drawer"
                    content={
                        <>
                            It offers easy navigation for user profiles and pet
                            profiles, allowing users to access and manage their personal
                            information and pet details effortlessly. Users can conveniently
                            update and view their profile information, including name,
                            address, and other relevant details. Additionally, a log-out
                            option is available for users to securely log out from their
                            accounts when needed. This intuitive navigation design
                            enhances the user experience and ensures efficient
                            management of user and pet profiles within the application.
                        </>
                    }
                />
                <ProjectAccordion
                    bgColor="bg-neutral"
                    titleColor="text-warning"
                    textColor="text-info"
                    title="Uesr Profile"
                    content={
                        <>
                            Users could review their user profile and view 
                            a graphical map of their address. Users can easily edit
                            their profile by clicking the "Edit User" button. This feature
                            enhances the user experience by providing a convenient way
                            to view and update their profile information.
                        </>
                    }
                />
                <ProjectAccordion
                    bgColor="bg-warning"
                    titleColor="text-neutral"
                    textColor="text-info"
                    title="Edit Uesr/Pet Profile"
                    content={
                        <>
                            Edit User Profile <br/> 
                            Users could update their name
                            and address, ensuring that their profile reflects accurate and
                            current information. Changes made to the name and address
                            are updated in the left-side navigation drawer header and the
                            map, respectively. This user-friendly interface simplifies the
                            editing process, enhancing the overall user experience of the
                            application. <br/><br/>
                            Edit Pet Profile <br/> 
                            Users could review pet profiles. It offers options to
                            add new pets or delete existing ones, giving users the ability to
                            manage their pet profiles effectively. Additionally, users can
                            easily navigate to the schedule and report pages using the
                            bottom navigation menu, enhancing their overall experience
                            with the application.
                        </>
                    }
                />
            </div>
        </div>
    </div>
  )
}

export default page
