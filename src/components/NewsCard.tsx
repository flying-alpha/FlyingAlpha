import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NewsCardProps {
  imgUrl: any;
  title: string;
  article: string;
  author: string;
  authorImg: any;
  category: string;
}

const NewsCard: React.FC<NewsCardProps> = ({imgUrl, title, article, author, authorImg, category}) => {
  return (
    <div className="max-w-[400px] overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 ">
      <div className="w-full h-64 relative">
        <Image
          src={imgUrl}
          alt="Article"
          layout="fill" 
          objectFit="cover"
        />
      </div>

      <div className="p-6">
        <div>
          <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{category}</span>
          <Link href="#"  className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline">{title}
          </Link>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{article}</p>
        </div>

        <div className="mt-4">
          <div className="flex items-center">
            <div className="flex items-center">
              {/* Next.js Image for optimized avatar */}
              <div className="relative h-10 w-10 rounded-full overflow-hidden">
                <Image
                  src={authorImg}
                  alt="Avatar"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <Link href="#" passHref
                 className="mx-2 font-semibold text-gray-700 dark:text-gray-200">{author}
              </Link>
            </div>
            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
