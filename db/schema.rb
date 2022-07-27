# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_07_27_191810) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "creatures", force: :cascade do |t|
    t.string "name"
    t.string "cr"
    t.string "xp"
    t.string "race"
    t.string "class1"
    t.string "class1_lvl"
    t.string "class2"
    t.string "class2_lvl"
    t.string "alignment"
    t.string "size"
    t.string "maintype"
    t.string "subtype1"
    t.string "subtype2"
    t.string "subtype3"
    t.string "subtype4"
    t.string "subtype5"
    t.string "subtype6"
    t.string "ac"
    t.string "ac_touch"
    t.string "ac_flat_footed"
    t.string "hp"
    t.string "hd"
    t.string "fort"
    t.string "ref"
    t.string "will"
    t.string "melee"
    t.string "ranged"
    t.string "space"
    t.string "reach"
    t.string "str"
    t.string "dex"
    t.string "con"
    t.string "int"
    t.string "wis"
    t.string "cha"
    t.string "feats"
    t.string "skills"
    t.string "racial_mods"
    t.string "languages"
    t.string "sq"
    t.string "environment"
    t.string "organization"
    t.string "treasure"
    t.string "group"
    t.string "gear"
    t.string "other_gear"
    t.string "character_flag"
    t.string "companion_flag"
    t.string "speed"
    t.string "base_speed"
    t.string "fly_speed"
    t.string "maneuverability"
    t.string "climb_speed"
    t.string "swim_speed"
    t.string "burrow_speed"
    t.string "speed_special"
    t.string "speed_land"
    t.string "timestamps"
  end

end
