import Head from 'next/head'
import F7Icon from 'react-f7-icons'
import { F7IconName } from 'react-f7-icons/generated/types'
import { useRecoilState, useRecoilValue } from 'recoil'
import { iconNames } from '../../icon-names'
import $ from './index.module.css'
import { isIconNameVisibleState } from '../state'
import copy from 'copy-to-clipboard'

export default function Home() {
  const [isIconNameVisible, setIsIconNameVisible] = useRecoilState(
    isIconNameVisibleState
  )

  return (
    <div className={$.page}>
      <Head>
        <title>React F7 Icons</title>
        <meta
          name="description"
          content="A React SVG components library of Framework7 Icons"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={$.title}>
        React{' '}
        <span
          style={{
            whiteSpace: 'nowrap',
          }}
        >
          F7 Icons
        </span>
      </h1>

      <div className={$.social}>
        <a
          href="https://github.com/jhaemin/react-f7-icons"
          target="_blank"
          rel="noreferrer noopener"
          className={$.gitHubLink}
        >
          <F7Icon name="logo_github" className={$.gitHubLogo} /> GitHub
        </a>
      </div>

      <div className={$.options}>
        <input
          id="toggle-name"
          type="checkbox"
          checked={isIconNameVisible}
          onChange={(e) => {
            setIsIconNameVisible(e.target.checked)
          }}
        />
        <label htmlFor="toggle-name">Show icon name</label>
      </div>

      <p>Click an icon to copy its name to clipboard.</p>

      <div className={$.iconsContainer}>
        {iconNames.map((name) => (
          <div
            key={name}
            className={$.icon}
            onClick={() => {
              copy(name)
              window.alert('Copied!')
            }}
          >
            <F7Icon name={name as F7IconName} size="2.2rem" />
            {isIconNameVisible && <span className={$.name}>{name}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}
