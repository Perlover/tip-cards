import isEqual from 'lodash.isequal'
import { computed, reactive, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { Settings as ZodSettings, type Settings } from '@shared/data/redis/Set'

import { getDefaultSettings, decodeCardsSetSettings, encodeCardsSetSettings } from '@/stores/cardsSets'

export default () => {
  const route = useRoute()
  const router = useRouter()

  const settingsUrl = computed<Settings>({
    get() {
      try {
        return ZodSettings.parse({
          ...getDefaultSettings(),
          ...decodeCardsSetSettings(String(route.params.settings)),
        })
      } catch (error) {
        console.error(error)
        return getDefaultSettings()
      }
    },
    set(value: Settings) {
      let settingsForUrl = ''
      if (!isEqual(value, getDefaultSettings())) {
        settingsForUrl = encodeCardsSetSettings(value)
      }

      router.replace({
        ...route,
        params: {
          ...route.params,
          settings: settingsForUrl,
        },
      })
    },
  })

  const settings = reactive<Settings>(settingsUrl.value)

  watch(settings, () => settingsUrl.value = { ...settings })

  watch(settingsUrl, () => Object.assign(settings, settingsUrl.value))

  return { settings }
}
