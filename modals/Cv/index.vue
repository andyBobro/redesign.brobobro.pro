<template>
  <DesktopAppModal :type="WindowPages.cv">
    <div class="@container/cv max-h-full overflow-y-auto">
      <div
        class="flex  @[0px]/cv:flex-col-reverse @[500px]/cv:flex-row gap-16 p-16"
        :class="{
          '': true
        }"
      >
        <div class="flex flex-col gap-16 w-full @[500px]/cv:w-1/3 sm">
          <DesktopContentFrame>
            <DesktopHeading
              :tag="Tags.h6"
              class="font-bold"
            >
              <template #default>
                {{ t('cv.skills.heading') }}
              </template>
            </DesktopHeading>
            <DesktopList class="mt-8">
              <DesktopListItem
                v-for="skill in skills.core"
                :key="skill"
              >
                {{ t(`cv.skills.${skill}`) }}
              </DesktopListItem>
            </DesktopList>
          </DesktopContentFrame>

          <DesktopContentFrame>
            <!-- <DesktopHeading
            :tag="Tags.p"
            class="font-bold"
          >
            <template #default>
              {{ t('main.me.official_name') }}
            </template>
            <template #subheading>
              {{ t('cv.position') }}
            </template>
          </DesktopHeading> -->

            <DesktopHeading
              :tag="Tags.h6"
              class="font-bold"
            >
              <template #default>
                {{ t('cv.about.heading') }}
              </template>
            </DesktopHeading>

            <DesktopText class="mt-8">
              {{ t('cv.about.text') }}
            </DesktopText>
          </DesktopContentFrame>
        </div>

        <div class="w-full @[500px]/cv:w-2/3">
          <DesktopContentFrame>
            <DesktopHeading
              :tag="Tags.h6"
              class="font-bold"
            >
              <template #default>
                {{ t('main.me.official_name') }}
              </template>
              <template #subheading>
                {{ t('cv.position') }}
              </template>
            </DesktopHeading>
          </DesktopContentFrame>
        </div>
      </div>
    </div>
  </DesktopAppModal>
</template>

<script>
export default {
  name: 'CvApp'
}
</script>

<script setup>
import DesktopContentFrame from '@/components/desktopUI/DesktopContentFrame/index.vue'
import DesktopHeading, { Tags } from '@/components/desktopUI/DesktopHeading/index.vue'
import DesktopText from '@/components/desktopUI/DesktopText/index.vue'
import DesktopList from '@/components/desktopUI/DesktopList/index.vue'
import DesktopListItem from '@/components/desktopUI/DesktopListItem/index.vue'
import DesktopAppModal from '@/components/desktopUI/DesktopAppModal/index.vue'
import { WindowPages } from '@/enums/pagesNames'
import { useI18n } from "vue-i18n";
import { skills } from '@/data/cv/index'

const { t } = useI18n();

</script>
