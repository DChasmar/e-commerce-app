import { useState, useEffect, useContext } from 'react';
import { DataContext } from './DataContext';
import { WebsiteConfig } from '../types';
import ReactMarkdown from 'react-markdown';

function About() {
  const data = useContext(DataContext);
  const [aboutContent, setAboutContent] = useState(<p>Loading...</p>);

  useEffect(() => {
    if (data.content && data.content.length > 0) {
      const aboutData = data.content.find((item: WebsiteConfig) => item.about_text);
      if (aboutData && aboutData.about_text) {
        setAboutContent(<ReactMarkdown>{aboutData.about_text}</ReactMarkdown>);
      }
    }
  }, [data]);

  return (
    <div className="container">
      <h1 className="text-center my-5">About The B E A in the W</h1>
      {aboutContent}
    </div>
  )
}

export default About