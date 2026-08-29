package uk.co.lunasenscapes.nfcshare

import android.content.Context
import android.content.SharedPreferences
import java.util.UUID
import kotlin.random.Random

/**
 * Stable cardId + nfcToken (LUNANFC_…) persisted like the web card localStorage.
 */
class CardIdentityStore(context: Context) {
    private val prefs: SharedPreferences =
        context.getSharedPreferences(PREFS, Context.MODE_PRIVATE)

    val cardId: String
        get() {
            var id = prefs.getString(KEY_CARD_ID, null)
            if (id.isNullOrBlank()) {
                id = "dbc_${System.currentTimeMillis()}_${UUID.randomUUID().toString().take(8)}"
                prefs.edit().putString(KEY_CARD_ID, id).apply()
            }
            return id
        }

    val nfcToken: String
        get() {
            var token = prefs.getString(KEY_TOKEN, null)
            if (token.isNullOrBlank()) {
                token = "LUNANFC_${cardId}_${randomSuffix()}"
                prefs.edit().putString(KEY_TOKEN, token).apply()
            }
            return token
        }

    var mode: LunaCard.Mode
        get() = LunaCard.Mode.fromKey(prefs.getString(KEY_MODE, LunaCard.Mode.TAP_N_SHARE.key))
        set(value) {
            prefs.edit().putString(KEY_MODE, value.key).apply()
        }

    fun cardUrl(): String = LunaCard.liveUrl(cardId, nfcToken, mode)

    private fun randomSuffix(): String {
        val alphabet = "abcdefghijklmnopqrstuvwxyz0123456789"
        return (1..12).map { alphabet[Random.nextInt(alphabet.length)] }.joinToString("")
    }

    companion object {
        private const val PREFS = "luna_nfc_share"
        private const val KEY_CARD_ID = "card_id"
        private const val KEY_TOKEN = "nfc_token"
        private const val KEY_MODE = "sharing_mode"
    }
}
