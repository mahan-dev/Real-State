import React from 'react';


interface DashboardProps {
    createdAt: string
}

const DashboardPage = ({createdAt}:DashboardProps) => {

    const stringifyDate = new Date(createdAt).toLocaleDateString("fa-IR")

    return (
        <section>
            <h2>سلام 👋</h2>
            <p className='mt-[6rem]'>
                آگهی های خود را ثبت کنید تا هزاران  نفر آن را مشاهده کنند
            </p>

            <span>
                تاریخ عضویت: 
                {stringifyDate}
            </span>
        </section>
    );
};

export default DashboardPage;