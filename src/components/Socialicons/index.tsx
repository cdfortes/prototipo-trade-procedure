import React, { useState, useEffect } from 'react'
import axios from 'axios'

import dynamic from 'next/dynamic'

const LineIcon = dynamic(() => import('react-lineicons'), { ssr: false })

type Data = {
  facebook?: string
  twitter?: string
  pinterest?: string
  behance?: string
  linkedin?: string
  dribbble?: string
  github?: string
  codepen?: string
}

const Socialicons = ({ bordered }: { bordered: boolean }) => {
  const [socialLinks, setSocialLinks] = useState<Data>()

  useEffect(() => {
    axios.get('/api/information').then((response) => {
      setSocialLinks(response.data.socialLinks)
    })
  }, [])
  return (
    <ul
      className={
        bordered ? 'mi-socialicons mi-socialicons-bordered' : 'mi-socialicons'
      }
    >
      {!socialLinks?.facebook ? null : (
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={socialLinks.facebook}
          >
            <LineIcon name="facebook" />
          </a>
        </li>
      )}
      {!socialLinks?.twitter ? null : (
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={socialLinks.twitter}
          >
            <LineIcon name="twitter" />
          </a>
        </li>
      )}
      {!socialLinks?.pinterest ? null : (
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={socialLinks.pinterest}
          >
            <LineIcon name="pinterest" />
          </a>
        </li>
      )}
      {!socialLinks?.behance ? null : (
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={socialLinks.behance}
          >
            <LineIcon name="behance" />
          </a>
        </li>
      )}
      {!socialLinks?.linkedin ? null : (
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={socialLinks.linkedin}
          >
            <LineIcon name="linkedin" />
          </a>
        </li>
      )}
      {!socialLinks?.dribbble ? null : (
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={socialLinks.dribbble}
          >
            <LineIcon name="dribbble" />
          </a>
        </li>
      )}
      {!socialLinks?.github ? null : (
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={socialLinks.github}
          >
            <LineIcon name="github" />
          </a>
        </li>
      )}
      {!socialLinks?.codepen ? null : (
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={socialLinks.codepen}
          >
            <LineIcon name="codepen" />
          </a>
        </li>
      )}
    </ul>
  )
}

export default Socialicons
