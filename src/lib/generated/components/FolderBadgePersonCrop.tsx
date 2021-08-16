import React from 'react'
import type { IconProps } from '../../types'

const FolderBadgePersonCrop: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 45.5564 30.9095 C 51.2719 30.9095 56 26.2223 56 20.4660 C 56 14.7509 51.2719 10.0226 45.5564 10.0226 C 39.8207 10.0226 35.1131 14.7509 35.1131 20.4660 C 35.1131 26.2223 39.8207 30.9095 45.5564 30.9095 Z M 0 42.1958 C 0 46.4514 2.1792 48.5688 6.4552 48.5688 L 41.3832 48.5688 C 45.0630 48.5688 47.2014 46.4308 47.2014 42.1958 L 47.2014 33.6232 C 46.6667 33.7054 46.1117 33.7465 45.5564 33.7465 C 44.9809 33.7465 44.4466 33.7054 43.8912 33.6437 L 43.8912 42.0519 C 43.8912 44.1694 42.7401 45.2590 40.7049 45.2590 L 6.5169 45.2590 C 4.4611 45.2590 3.3098 44.1694 3.3098 42.0314 L 3.3098 25.0710 L 33.0984 25.0710 C 32.7283 24.0842 32.4816 23.0358 32.3994 21.9668 L 3.3098 21.9668 L 3.3098 16.7861 C 3.3098 14.7509 4.3994 13.7230 6.3524 13.7230 L 10.9574 13.7230 C 12.3142 13.7230 13.1365 14.0519 14.1850 14.9565 L 15.4391 15.9844 C 16.7753 17.0945 17.8649 17.5057 19.9001 17.5057 L 32.6461 17.5057 C 32.8928 16.3339 33.3245 15.2032 33.8796 14.1958 L 20.7636 14.1958 C 19.3656 14.1958 18.5227 13.8463 17.4948 12.9829 L 16.2408 11.9345 C 14.8840 10.8038 13.8355 10.4132 11.8003 10.4132 L 5.6740 10.4132 C 2.0763 10.4132 0 12.4690 0 16.6217 Z M 45.5358 21.0828 C 43.6445 21.0828 42.1848 19.5204 42.1848 17.3823 C 42.1848 15.4704 43.6651 13.8463 45.5358 13.8463 C 47.4275 13.8463 48.9074 15.4704 48.9074 17.3823 C 48.9074 19.5204 47.4275 21.0828 45.5358 21.0828 Z M 45.5564 28.5042 C 42.5549 28.5042 40.1702 26.9624 39.5125 25.5438 L 39.5125 25.4411 C 40.1908 24.1665 42.2880 22.7480 45.5564 22.7480 C 48.8253 22.7480 50.9220 24.1665 51.5800 25.4616 L 51.5800 25.5438 C 50.9018 26.9829 48.5579 28.5042 45.5564 28.5042 Z"/></svg>
}

export default FolderBadgePersonCrop
