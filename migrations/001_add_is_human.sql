-- Add is_human column to both tables
ALTER TABLE responses ADD COLUMN IF NOT EXISTS is_human BOOLEAN;
ALTER TABLE results ADD COLUMN IF NOT EXISTS is_human BOOLEAN;

-- Backfill all existing data as human (true)
UPDATE responses SET is_human = true WHERE is_human IS NULL;
UPDATE results SET is_human = true WHERE is_human IS NULL;
