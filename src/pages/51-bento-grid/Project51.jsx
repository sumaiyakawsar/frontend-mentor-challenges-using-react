import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle';
import './style/project51.scss';

import illustrationFS from "./images/illustration-five-stars.webp"
import illustrationMP from "./images/illustration-multiple-platforms.webp"
import illustrationCS from "./images/illustration-consistent-schedule.webp"
import illustrationSP from "./images/illustration-schedule-posts.webp"
import illustrationGF from "./images/illustration-grow-followers.webp"
import illustrationAG from "./images/illustration-audience-growth.webp"
import illustrationCP from "./images/illustration-create-post.webp"
import illustrationAI from "./images/illustration-ai-content.webp"
import Card from "./component/Card";



function Project51() {
    useFavicon("icons/project1314.png");
    useDocumentTitle("Bento grid | Frontend Mentor");

    return (
        <div className='project-51'>
            <div className="container">


                <div className="content-grid">
                    <Card className="purple social-media">
                        <h1>Social Media <span>10x</span> Faster with AI</h1>
                        <img src={illustrationFS} alt="" />
                        <p>Over 4,000 5-star reviews</p>
                    </Card>

                    <Card className="manage white">
                        <img src={illustrationMP} alt="" />
                        <h2>  Manage multiple accounts and platforms. </h2>
                    </Card>

                    <Card className="posting-schedule yellow">
                        <h2>
                            Maintain a consistent posting schedule.

                        </h2>
                        <img src={illustrationCS} alt="" />
                    </Card>

                    <Card className="schedule-social lightpurple">
                        <h2> Schedule to social media.</h2>
                        <img src={illustrationSP} alt="" />
                        <p>Optimize post timings to publish content at the perfect time for your audience.
                        </p>
                    </Card>

                    <Card className="followers purple">
                        <div className="image-wrapper">
                            <img src={illustrationGF} alt="" />
                        </div>
                        <h2>  Grow followers with non-stop content.</h2>
                    </Card>

                    <Card className="audience white">
                        <div className="content">
                            <h2> {'>'} 56%</h2>
                            <p>   faster audience growth</p>
                        </div>

                        <img src={illustrationAG} alt="" />
                    </Card>


                </div>


                <div className="postai">
                    <Card className="create-post lightyellow">
                        <h2>  Create and schedule content <span>quicker.</span></h2>
                        <img src={illustrationCP} alt="" />
                    </Card>
                    <Card className="ai yellow">
                        <h2>  Write your content using AI.</h2>
                        <img src={illustrationAI} alt="" />
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Project51