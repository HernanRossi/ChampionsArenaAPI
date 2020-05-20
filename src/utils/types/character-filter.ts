type CharFilter = {
  user?: string
  class?: string
  ancestry?: string
  level?: {
    $lte?: number,
    $gte?: number
  }
  name?: string
}

export default CharFilter