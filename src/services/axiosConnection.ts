import api from '@/utils/api'

const get = async (
  url: string
): Promise<{ id: number; name: string; completed: boolean }[]> => {
  return await api({
    method: 'get',
    url,
  })
    .then((response) => {
      console.log({ response })

      return response.data
    })
    .catch(function (error) {
      console.error(error)
    })
}

const post_or_patch = async (
  url: string,
  type: 'post' | 'patch',
  data: unknown
): Promise<void> => {
  return await api({
    method: type === 'post' ? 'post' : 'patch',
    data,
    url,
  })
    .then((response) => {
      console.log({ response })

      return response.data
    })
    .catch(function (error) {
      console.error(error)
    })
}

const deleteOne = async (url: string): Promise<void> => {
  return await api({
    method: 'delete',
    url,
  })
    .then((response) => {
      console.log({ response })

      return response.data
    })
    .catch(function (error) {
      console.error(error)
    })
}

export default {
  get,
  post_or_patch,
  deleteOne,
}
