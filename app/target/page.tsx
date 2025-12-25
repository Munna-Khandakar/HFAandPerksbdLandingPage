'use client'

import {PageHero} from "@/components/layout/PageHero";
import {PageSection} from "@/components/layout/PageSection";
import CompanyTarget from "@/components/CompanyTarget";

const page = () => {
    return (
        <>
            <PageHero
                title="Our Targets"
                subtitle="Dedicated to establishing and achieving ambitious goals that reflect our mission and vision"
                backgroundImage="/image/target.avif"
            />

            <PageSection>
                <CompanyTarget/>
            </PageSection>
        </>
    )
}

export default page
