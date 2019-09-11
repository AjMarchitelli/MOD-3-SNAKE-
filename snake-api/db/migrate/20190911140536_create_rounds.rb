class CreateRounds < ActiveRecord::Migration[5.2]
  def change
    create_table :rounds do |t|
      t.integer :game_id
      t.integer :score
      t.timestamps
    end
  end
end
