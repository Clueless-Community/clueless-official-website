import React from 'react'
import Footer from '../components/shared/Footer'
import Navbar from '../components/shared/Navbar/Navbar'
import Head from 'next/head'

const index = () => {
    return (
        <div>
            <Head>
            <title>ClueLess | Terms & Condition</title>
            </Head>
            <Navbar />
                <div className="lg:px-28 w-11/12 mx-auto ">
                    <h1 className="text-4xl font-semibold mt-16">Terms and Conditions of Use</h1>

                    <h1 className="text-xl font-medium mt-16">1. Terms</h1>

                    <p className="my-4">By accessing this Website, accessible from clueless.tech, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.</p>

                    <h1 className="text-xl font-medium mt-16">2. User License</h1>

                    <p className="my-4">Permission is granted to temporarily download one copy of the materials on ClueLess's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:

                        modify or copy the materials;
                        use the materials for any commercial purpose or for any public display;
                        attempt to reverse engineer any software contained on ClueLess's Website;
                        remove any copyright or other proprietary notations from the materials; or
                        transferring the materials to another person or "mirror" the materials on any other server.
                        This will let ClueLess to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format. These Terms of Service has been created with the help of the Terms Of Service Generator.</p>
                    <h1 className="text-xl font-medium mt-16">3. Disclaimer</h1>

                    <p className="my-4">All the materials on ClueLess’s Website are provided "as is". ClueLess makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, ClueLess does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>
                    <h1 className="text-xl font-medium mt-16">4. Limitations</h1>
                    <p className="my-4">ClueLess or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on ClueLess’s Website, even if ClueLess or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</p>
                    <h1 className="text-xl font-medium mt-16">5. Revisions and Errata</h1>
                    <p className="my-4">The materials appearing on ClueLess’s Website may include technical, typographical, or photographic errors. ClueLess will not promise that any of the materials in this Website are accurate, complete, or current. ClueLess may change the materials contained on its Website at any time without notice. ClueLess does not make any commitment to update the materials.</p>
                    <h1 className="text-xl font-medium mt-16">6. Links</h1>
                    <p className="my-4">ClueLess has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by ClueLess of the site. The use of any linked website is at the user’s own risk.</p>
                    <h1 className="text-xl font-medium mt-16">7. Site Terms of Use Modifications</h1>
                    <p className="mt-4 mb-10">ClueLess may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p>
                </div>
                    <Footer />
            </div>
    )
}

export default index