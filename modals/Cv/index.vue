<template>
  <DesktopAppModal :type="WindowPages.cv">
    <div class="@container/cv max-h-full overflow-y-auto p-16">
      <DesktopHeading
        :tag="Tags.h5"
        class="font-bold"
      >
        <template #default>
          {{ t('main.me.official_name') }}
        </template>
        <template #subheading>
          {{ t('cv.position') }}
        </template>
      </DesktopHeading>
      <div
        class="flex @[0px]/cv:flex-col-reverse @md/cv:flex-row mt-32 gap-32"
      >
        <div class="flex flex-col w-full @md/cv:w-1/3 md">
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

          <DesktopHeading
            :tag="Tags.h6"
            class="font-bold mt-32"
          >
            <template #default>
              {{ t('cv.about.heading') }}
            </template>
          </DesktopHeading>

          <DesktopText class="mt-8">
            {{ t('cv.about.text') }}
          </DesktopText>
        </div>

        <div class="w-full @md/cv:w-2/3">
          <DesktopHeading
            :tag="Tags.h6"
            class="font-bold"
          >
            <template #default>
              {{ t('cv.experience.heading') }}
            </template>
          </DesktopHeading>

          <CVExperienceItem
            class="first:mt-0 mt-16"
            v-for="position in experience"
            :key="position.position"
            :item="position"
          />
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
import CVExperienceItem from '@/components/cv/CVExperienceItem/index.vue'
import DesktopAppModal from '@/components/desktopUI/DesktopAppModal/index.vue'
import { WindowPages } from '@/enums/pagesNames'
import { useI18n } from "vue-i18n";
import { skills, experience } from '@/data/cv/index'

const { t } = useI18n();

console.log(experience);

</script>
