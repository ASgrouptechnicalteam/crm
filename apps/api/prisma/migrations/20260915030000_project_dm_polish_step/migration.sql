-- AlterTable
ALTER TABLE `Project`
  ADD COLUMN `digital_marketing_executive_id` INTEGER NULL,
  ADD COLUMN `seo_title` VARCHAR(191) NULL,
  ADD COLUMN `seo_keywords` VARCHAR(191) NULL;

-- Data migration: any existing PENDING_VERIFICATION row already passed PM
-- submission under the old two-step flow, so it maps forward to
-- PENDING_MD_APPROVAL (skipping the new DM step for in-flight rows only --
-- new submissions always go through PENDING_DM_POLISH first).
UPDATE `Project` SET `verification_status` = 'PENDING_MD_APPROVAL' WHERE `verification_status` = 'PENDING_VERIFICATION';

-- CreateIndex
CREATE INDEX `Project_digital_marketing_executive_id_idx` ON `Project`(`digital_marketing_executive_id`);

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_digital_marketing_executive_id_fkey` FOREIGN KEY (`digital_marketing_executive_id`) REFERENCES `Employee`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
