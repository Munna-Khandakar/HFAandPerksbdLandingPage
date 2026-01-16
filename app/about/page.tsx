'use client'

import {DirectorNote} from "@/components/DirectorNote";
import CompanyBackground from "@/components/CompanyBackground";
import {PageHero} from "@/components/layout/PageHero";
import {PageSection} from "@/components/layout/PageSection";

const page = () => {
    return (
        <>
            <PageHero
                title="Who We Are"
                subtitle="Welcome to Perks Group, a conglomerate of companies dedicated to excellence and making a positive impact in various domains. We are driven by a shared commitment to quality, sustainability, and social responsibility. Our group comprises Perks Auto, Perks Tex, Perks Charity, Perks Agro, Perks Sports and Perks Solutions, each specializing in their unique field while embodying our core values."
                backgroundImage="/image/whoweare.jpg"
            />

            <CompanyBackground/>

            <PageSection background="muted">
                <DirectorNote/>
            </PageSection>
        </>
    )
}

export default page
