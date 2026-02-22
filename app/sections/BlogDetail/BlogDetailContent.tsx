'use client'

import { motion } from 'framer-motion'
import Container from '../../components/ui/Container'
import type { BlogDetailData } from '@/lib/blog-detail-data'

export interface BlogDetailContentProps {
  post: BlogDetailData
}

export default function BlogDetailContent({ post }: BlogDetailContentProps) {
  return (
    <section className="w-full bg-[#EDEDED] py-12 md:py-16 lg:py-20 rounded-tl-[50px] rounded-tr-[50px]">
      <Container>
        <motion.article
          className="max-w-[720px] mx-auto prose prose-lg prose-gray"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-[17px] md:text-[18px] leading-[1.75] text-gray-800 space-y-6">
            {post.body.map((block, i) =>
              block.type === 'heading' ? (
                <h2
                  key={i}
                  className="text-xl md:text-2xl font-bold text-black mt-8 mb-3 first:mt-0"
                >
                  {block.text}
                </h2>
              ) : (
                <p key={i} className="text-gray-700">
                  {block.text}
                </p>
              )
            )}
          </div>
        </motion.article>
      </Container>
    </section>
  )
}
