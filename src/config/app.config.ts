import {FiCloud, FiCode, FiCpu, FiFacebook, FiGithub} from 'react-icons/fi';
import avatarImage from '../assets/image/IMG_20250925_193508.png';
import verticalAvatar from '../assets/image/abc.png';

export const AppConfig = {
  name: "Duc Huy Nguyen",
  username: "hyulevo653", // should be GitHub username
  avatar: avatarImage,
  verticalAvatar: verticalAvatar,
  introduction: `2+ years experience in software development.\n` +
    `Working in scalable and high-performance technology systems.\n` +
    `Web Development, Mobile Development, DevOps & more.`,
  subscriptions: [{
    name: "Hire Me",
    price: "At any price",
    preferred: true,
  }, {
    name: "Freelance",
    price: "From $100"
  }],
  socialLinks: [{
    name: 'GitHub',
    url: 'https://github.com/hyulevo653',
    icon: FiGithub
  }, {
    name: 'Facebook',
    url: 'https://facebook.com/hyu.levo.666',
    icon: FiFacebook
  }],
  expertises: [{
    name: 'Web Development',
    icon: FiCode,
    description: 'Angular, React, Node.js, Nest.js, SQL, MongoDB, REST API.'
  }, {
    name: 'Infrastructure',
    icon: FiCloud,
    description: 'Kubernetes, Docker, etc.'
  }],
  giscusEnabled: true,
}
